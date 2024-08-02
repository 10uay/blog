import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

export default function PostCard({ post }) {

    const ScrollToTopButton = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[350px] transition-all"
      >
        <img
          src={post.image}
          alt="post cover"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        />
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
          <span className="italic text-sm">{post.category}</span>
          <Link
            to={`/post/${post.slug}`}
            onClick={ScrollToTopButton}
            className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
          >
            Read article
          </Link>
        </div>
      </motion.div>
    );
}