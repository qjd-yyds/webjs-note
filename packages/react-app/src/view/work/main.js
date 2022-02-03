import React from 'react';
import Tab from '../../common/component/tab';
import Article from './article';
import Good from './good';
import MessageList from './messsageList';
export default function Main(props){
    let {data} = props;
    return (
        <div className="workDetails">
            <Tab 
                data={data.image_path.map(item=>item.path)}
                render={src=><img src={src} />}
            />
            <div className="miiaov_box">
                <Article 
                    data = {data}
                />
                <article className="miiaov_comment">
                    <Good 
                        goodNub={data.good}
                        id= {data.id}
                    />
                    <MessageList />
                </article>
            </div>
        </div>
    )
}