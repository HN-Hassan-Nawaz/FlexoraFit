import { useState } from 'react';
import { blogPosts } from '../../data/blogs';
import { BlogPost } from '../../types';
import Container from '../common/Container';
import PageHero from '../common/PageHero';
import BlogCard from '../cards/BlogCard';
import Badge from '../common/Badge';
import { ArrowLeft, BookOpen, Calendar, Clock, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Workout', 'Diet', 'Motivation', 'Beginners'];

  // Filtering
  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory);

  const handleReadPost = (post: BlogPost) => {
    setReadingPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setReadingPost(null);
    window.scrollTo({ top: 300, behavior: 'smooth' }); // align with index
  };

  return (
    <div className="flex flex-col text-left">
      {/* If reading a post, display custom Hero banner, otherwise display index Hero */}
      <AnimatePresence mode="wait">
        {readingPost ? (
          <motion.div
            key="reading-hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PageHero
              title={readingPost.title}
              description={readingPost.excerpt}
              tagline={`CATEGORIZED UNDER ${readingPost.category.toUpperCase()}`}
              extraContent={
                <button
                  onClick={handleBackToList}
                  className="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider cursor-pointer outline-none"
                >
                  <ArrowLeft size={14} />
                  <span>Back to Advice Articles</span>
                </button>
              }
            />
          </motion.div>
        ) : (
          <motion.div
            key="index-hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PageHero
              title="FlexoraFit Science Journal."
              description="Read and integrate proven advice on body biomechanics, progressive overload schemes, and whole-foods metabolism."
              tagline="Habits. Science. Strength."
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dynamic Main Body */}
      <section className="py-16 bg-white dark:bg-stone-900 transition-colors duration-300 min-h-[500px]">
        <Container>
          <AnimatePresence mode="wait">
            {readingPost ? (
              /* Reading Mode: Rich Text format */
              <motion.article
                key="reading-body"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-3xl mx-auto"
              >
                {/* Meta details row */}
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 dark:text-stone-500 mb-6 pb-4 border-b border-slate-150 dark:border-stone-850">
                  <div className="flex items-center gap-1">
                    <Calendar size={13} />
                    <span>Published On: {readingPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={13} />
                    <span>Duration: {readingPost.readTime}</span>
                  </div>
                </div>

                {/* Cover High quality photo */}
                <div className="h-64 sm:h-96 rounded-2xl overflow-hidden border border-slate-205 dark:border-stone-850 mb-8 shadow-sm">
                  <img
                    src={readingPost.image}
                    alt={readingPost.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Article body content */}
                <div className="prose prose-slate dark:prose-invert prose-emerald max-w-none text-xs sm:text-sm font-medium leading-relaxed text-slate-700 dark:text-stone-400 space-y-6">
                  <p className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white leading-relaxed first-letter:text-4xl first-letter:font-black first-letter:text-emerald-500 first-letter:mr-1.5 first-letter:float-left">
                    {readingPost.content}
                  </p>
                  
                  <h3 className="font-black text-xs sm:text-sm text-slate-900 dark:text-white uppercase tracking-wider pt-4 border-l-2 border-emerald-500 pl-3">
                    Progressive Strategies & Biological Mechanics
                  </h3>
                  <p>
                    Whenever you construct muscle fibers under progressive barbell overload, your skeletal cells require a delicate sequence of amino acid saturation and continuous hydration templates to ensure muscle protein synthesis happens. Resting muscle spindles require approximately 48 hours before loading them with identical compound intensities.
                  </p>
                  <p>
                    By logging your routines through our <strong>Streak Console</strong> and planning meal metrics via our <strong>TDEE Calculators</strong>, you prevent ego-lifting injuries and establish lasting neurological habits of consistency.
                  </p>
                </div>

                {/* Back to index trigger */}
                <div className="mt-12 pt-8 border-t border-slate-100 dark:border-stone-850 flex justify-between items-center">
                  <button
                    onClick={handleBackToList}
                    className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-450 hover:text-emerald-500 cursor-pointer outline-none"
                  >
                    <ArrowLeft size={14} className="stroke-[2.5]" />
                    <span>Back to all journals</span>
                  </button>
                  <Badge variant="outline">{readingPost.category}</Badge>
                </div>
              </motion.article>
            ) : (
              /* Index List Mode with Filter */
              <motion.div
                key="list-body"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Category filters row */}
                <div className="flex flex-wrap gap-2 justify-center mb-12">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`py-2 px-4 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer outline-none select-none ${
                        activeCategory === cat
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/10'
                          : 'bg-slate-50 dark:bg-stone-900 text-slate-705 dark:text-stone-300 hover:bg-slate-100 dark:hover:bg-stone-850 border border-slate-200 dark:border-stone-800'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Grid List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredPosts.map((post) => (
                    <BlogCard
                      key={post.id}
                      post={post}
                      onRead={(p) => handleReadPost(p)}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>
    </div>
  );
}
