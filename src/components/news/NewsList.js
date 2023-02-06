import React from 'react'
import NewsListSingle from './NewsListSingle'

const NewsListData = [{ id: 1,
    imageUrl:'assets/images/news_img1.jpg',
    title:'Specimen book. It has survived not only five',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "7 July 2019"
},
{ id: 2,
    imageUrl:'assets/images/news_img2.jpg',
    title:'Specimen book. It has survived not only five',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "7 July 2019"
},
{ id: 3,
    imageUrl:'assets/images/news_img3.jpg',
    title:'Specimen book. It has survived not only five',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "7 July 2019"
},]

function NewsList() {
  return (
    <div className="row">
        {NewsListData.map(news => {
            return (
                <NewsListSingle
                    key={news.id}
                    imageUrl={news.imageUrl}
                    title={news.title}
                    description={news.description}
                    date={news.date}
                />
            )
        })}
    </div>
  )
}

export default NewsList