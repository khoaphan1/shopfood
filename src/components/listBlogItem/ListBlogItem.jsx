import React from "react";
import "./ListBlogItem.css";
import BlogItem from "../blogItem/BlogItem";
import NavigationBlog from "../navigationBlog/NavigationBlog";
import {listBlogSelector} from '../../redux/selector';
import { useDispatch, useSelector } from "react-redux";

const ListBlogItem = () => {

  const listBlog = useSelector(listBlogSelector)
  console.log(listBlog)

  return (
    <div className="blog-area py-20 mb-20">
      <div className="max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full">
        <div className="flex w-full">
        <div className="w-2/3">
            <div className="blog-list">
              <div className="grid grid-cols-2 gap-6">
                {listBlog.map((blog, index) => (
                  <BlogItem
                    id= {blog.id}
                    name = {blog.name}
                    imageBlog = {blog.image}
                    author = {blog.author}
                    content = {blog.content}
                    tag = {blog.tag}
                    des = {blog.des}
                    view = {blog.view}
                    totalComment = {blog.totalComment}
                    dateCreate = {blog.dateCreate}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-1/3 ml-7">
            <NavigationBlog />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ListBlogItem