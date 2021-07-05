import {useCallback, createRef, useState, useEffect} from 'react'
import axios from 'axios';
import moment from "moment";

export default function Search() {

  moment.locale('de');
  const searchRef = createRef()
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('%20%20%20');
  const [data, setData] = useState({hits: []});

  const onSubmit = useCallback((event) => {
    event.preventDefault();
  })

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://feed-prod.unitycms.io/6/search?q=${search}`,
      );
      setData(result.data);
    };

    fetchData();
  }, [search]);

  return (
    <div ref={searchRef}>
      <header className={"header"}>
        <form onSubmit={onSubmit}>
          <h1><a href={"/"}><img src={"/apple-touch-icon.png"} className={"inline w-24"} alt={"20sec"}/></a> <br />Die fehlende 20 Minuten Suchfunktion</h1>
          <br />
          <input
            onChange={event => setQuery(event.target.value)}
            placeholder='Suche'
            type='text'
            name='query'
            value={query}
            className={"query"}
          />
          <button onClick={() => setSearch(query)}
                  className={"button"}>Suche
          </button>
        </form>
      </header>
      {data && data.content && data.content.length > 0 && (
        <div className={"list"}>
          {data.content.map(({id, type, content}) => (
            <div key={id} className={"item"}>
              <div className={"item__content"}>
                <a href={"https://20min.ch" + content.url}>
                  <div className={'item__image'}>
                    <img src={content.image.variants.big.src} alt={content.image.name}/>
                  </div>
                  <div className={"item__date"}>
                    {moment(content.published).format('lll')}
                  </div>
                  <div className={"item__title"}>
                    <h3>{content.title}</h3>
                  </div>
                  <div className={"item__lead"}>
                    <p>{content.lead}</p>
                  </div>
                  <div className={"item__type"}>
                    {type.slice(0, -1)}
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
