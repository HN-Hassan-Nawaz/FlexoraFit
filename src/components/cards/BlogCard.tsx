import { BlogPost } from '../../types';
import Badge from '../common/Badge';
import { Calendar, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface BlogCardProps {
  post: BlogPost;
  onRead?: (post: BlogPost) => void;
  id?: string;
  key?: string | number;
}

export default function BlogCard({ post, onRead, id }: BlogCardProps) {
  const getCategoryVariant = (cat: string) => {
    switch (cat) {
      case 'Workout': return 'primary';
      case 'Diet': return 'success';
      case 'Motivation': return 'warning';
      case 'Beginners': return 'neutral';
      default: return 'primary';
    }
  };

  return (
    <motion.article
      id={id}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="flex flex-col bg-white dark:bg-stone-900 border border-slate-200/80 dark:border-stone-800/80 rounded-xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-stone-950/20 transition-all duration-300"
    >
      {/* Blog Image */}
      <div className="relative h-48 overflow-hidden group">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Category Pill */}
        <div className="absolute top-4 left-4">
          <Badge variant={getCategoryVariant(post.category)}>
            {post.category}
          </Badge>
        </div>
      </div>

      {/* Info Body */}
      <div className="flex flex-col flex-grow p-6">
        {/* Date / Read time row */}
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 dark:text-stone-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={13} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={13} />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg lg:text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug hover:text-emerald-500 transition-colors duration-200 cursor-pointer" onClick={() => onRead?.(post)}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-slate-600 dark:text-stone-400 mb-6 flex-grow leading-relaxed">
          {post.excerpt}
        </p>

        {/* Read More link */}
        <button
          onClick={() => onRead?.(post)}
          className="inline-flex items-center gap-1.5 text-xs font-black tracking-wider text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 uppercase transition-all duration-200 cursor-pointer outline-none focus:underline"
        >
          <span>Read Full Article</span>
          <ArrowRight size={14} className="stroke-[3]" />
        </button>
      </div>
    </motion.article>
  );
}
