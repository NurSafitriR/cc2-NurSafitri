import { createContext, useContext, useState, type ReactNode } from 'react'
import { dummyBlogPosts } from '../data/dummyBlogs'
import type { BlogPost } from '../types/blog'

interface BlogContextValue {
  posts: BlogPost[]
  addPost: (post: Omit<BlogPost, 'id' | 'date'>) => void
}

const BlogContext = createContext<BlogContextValue | undefined>(undefined)

export function BlogProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<BlogPost[]>(dummyBlogPosts)

  function addPost(newPost: Omit<BlogPost, 'id' | 'date'>) {
    const post: BlogPost = {
      ...newPost,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    }
    setPosts((prevPosts) => [post, ...prevPosts])
  }

  return <BlogContext.Provider value={{ posts, addPost }}>{children}</BlogContext.Provider>
}

export function useBlog() {
  const context = useContext(BlogContext)
  if (context === undefined) {
    throw new Error('useBlog harus dipakai di dalam <BlogProvider>')
  }
  return context
}
