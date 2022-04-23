import React from "react";
import BlogItem from "../blogItem/BlogItem";
import { listBlogSelector } from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";

const ListBlog = () => {
  const listBlog = useSelector(listBlogSelector);
  console.log(listBlog);

  return (
    <div className="container max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full mt-8">
      <div className="grid grid-cols-3 gap-6">
        {listBlog.map((blog, index) => {
          if (index < 3) {
            return (
              <BlogItem
                id={blog.id}
                name={blog.name}
                imageBlog={blog.image}
                author={blog.author}
                content={blog.content}
                tag={blog.tag}
                des={blog.des}
                view={blog.view}
                totalComment={blog.totalComment}
                dateCreate={blog.dateCreate}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ListBlog;
