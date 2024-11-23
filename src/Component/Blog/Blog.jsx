import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

function Blog() {
  const blogPosts = [
    {
      image:
        "https://media.istockphoto.com/id/506164764/photo/tractor-spraying-soybean-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=FziHcky7PA62LyCW15cUEva70DhfXUbdeNIZBi_zQlk=",
      title: "Overview of Sustainable Agriculture in Pakistan",
      author: "Dr. M. Awais Ali khan",
      description:
        "Sustainable agriculture is the practice of producing food in a way that is environmentally, socially, and economically sustainable.",
      date: "April 20, 2023",
      to: "/Blogdetail",
    },
    {
      image:
        "https://media.istockphoto.com/id/1805849861/photo/harvesting-in-agriculture-crop-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=hlM73BNUq9hnlf354Lk2mqZc8OU5i9c9iIuQx1CJAKk=",
      title: "Women Empowerment in Agriculture",
      author: "Dr. Sarah Ahmed",
      description:
        "Empowering women in agriculture leads to better livelihoods, sustainable farming, and strong rural economies.",
      date: "May 10, 2023",
    },
    {
      image:
        "https://media.istockphoto.com/id/511976070/photo/green-sprouts.webp?a=1&b=1&s=612x612&w=0&k=20&c=_Q4M2hOsyv_5g1bXY5gFczSXgx0skijUhAULDSi5KBk=",
      title: "Digital Tools in Modern Farming",
      author: "John Doe",
      description:
        "Integrating digital tools such as drones and AI can revolutionize the way we approach farming and food production.",
      date: "June 15, 2023",
    },
  ];
  return (
    <>
      <section className="blog-details">
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

export default Blog;
