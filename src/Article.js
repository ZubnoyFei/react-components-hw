import React from 'react';
import PropTypes from "prop-types";

const Article = (props) => {
    return <main>
        <section className="posts">
            <div className="container">
                <h1>
                    Posts
                </h1>
                <ul className="list">
                    {props.titleList.map((item) => {
                        return (<li className="list__item" key={item.title}>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </li>)
                    })}

                </ul>
            </div>
        </section>

    </main>
}

Article.propTypes = {
    titleList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Article;