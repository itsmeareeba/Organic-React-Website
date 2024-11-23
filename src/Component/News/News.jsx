import React from "react";
import "./News.css";
import { Link } from "react-router-dom";
function News() {
  const blogPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3cyUyMHJlbGF0ZWQlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      title: "Overview of Sustainable Agriculture in Pakistan",
      author: "Dr. M. Awais Ali khan",
      description:
        "Sustainable agriculture is the practice of producing food in a way that is environmentally, socially, and economically sustainable.",
      date: "April 20, 2023",
      to: "/NewsDetail",
    },
    {
      image:
        "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5ld3MlMjByZWxhdGVkJTIwaW1hZ2VzfGVufDB8fDB8fHww",
      title: "Women Empowerment in Agriculture",
      author: "Dr. Sarah Ahmed",
      description:
        "Empowering women in agriculture leads to better livelihoods, sustainable farming, and strong rural economies.",
      date: "May 10, 2023",
    },
    {
      image:
        "https://images.unsplash.com/photo-1583932692977-7c74a6b7e7ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG5ld3MlMjByZWxhdGVkJTIwaW1hZ2VzfGVufDB8fDB8fHww",
      title: "Digital Tools in Modern Farming",
      author: "John Doe",
      description:
        "Integrating digital tools such as drones and AI can revolutionize the way we approach farming and food production.",
      date: "June 15, 2023",
    },
  ];
  return (
    <>
      <section className="News-details">
        <div className="container-fluid">
          <div className="row row-custom">
            <div className="blog-cards-row">
              {blogPosts.map((post, index) => (
                <div className="card " key={index}>
                  <div className="card-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="card-content">
                    <h3>{post.title}</h3>
                    <p>
                      <strong>Author : </strong> {post.author}
                    </p>
                    <p className="description">{post.description}</p>
                    <Link to={post.to} className="learn-more">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
