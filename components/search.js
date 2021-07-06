import {useCallback, createRef, useState, useEffect} from 'react'
import axios from 'axios';
import moment from "moment";

export default function Search() {

  moment.locale('de');
  const searchRef = createRef()
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [data, setData] = useState({hits: []});
  const [next, setNext] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const onSubmit = useCallback((event) => {
    event.preventDefault();
  })

  const fetchData = async (search, start) => {
    if (search !== '') {
      const result = await axios({
          method: 'GET',
          url: 'https://feed-prod.unitycms.io/6/search',
          params: {q: search, start: start}
        }
      );
      setSearch(search)
      setData(result.data);
      setNext(start + 20)
      setHasMore(result.data.nextpage !== 'undefined');
    }
  };

  useEffect(() => {
    fetchData('%20%20%20', 1);
  }, []);

  return (
    <div ref={searchRef} id={"top"}>
      <header className={"header"}>
        <form onSubmit={onSubmit}>
          <h1><a href={"/"}><img src={"/apple-touch-icon.png"} className={"inline w-24"} alt={"20sec"}/></a> <br/>Die
            fehlende 20 Minuten Suchfunktion</h1>
          <br/>
          <input
            onChange={event => setQuery(event.target.value)}
            placeholder='Suche'
            type='text'
            name='query'
            value={query}
            className={"query"}
          />
          <button onClick={() => fetchData(query, 1)}
                  className={"button"}>Suche
          </button>
        </form>
      </header>
      {data && data.content && data.content.length > 0 && (
        <div className={"list"}>
          {data.content.map(({id, type, content}) => {
            return (
              <div key={id} className={"item"}>
                <div className={"item__content"}>
                  <a href={"https://20min.ch" + content.url}>
                    <div className={'item__image'}>
                      {content.image && <img src={content.image.variants.big.src} alt={content.image.name}/>}
                    </div>
                    <div className={"item__titleHeader"}>
                      <h4>{content.titleHeader}</h4>
                    </div>
                    <div className={"item__title"}>
                      <h3>{content.title}</h3>
                    </div>
                    <div className={"item__lead"}>
                      <p>{content.lead}</p>
                    </div>
                    <div className={"item__date"}>
                      {moment(content.published).format('lll')}
                    </div>
                    <div className={"item__type"}>
                    <span
                      className={type}>{type.replace('articles', 'Artikel').replace('videos', 'Video').replace('tickers', 'Ticker')}</span>
                      {content.settings.breakingNews && <span className={"breaking"}>Breaking News</span>}
                      {content.settings.live && <span className={"live"}>Live</span>}
                    </div>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      )}
      {hasMore && <a href={"#top"} onClick={() => fetchData(search, next)} className={"button__more"}>weiter</a>}
    </div>
  )
}
