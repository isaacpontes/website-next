import PostPreview from "../blog/PostPreview";

function BlogSection({ posts }) {
  return (
    <section className="section has-background-white is-gradient">
      <div className="container is-max-desktop has-text-centered mb-6">
        <h2 className="title is-spaced">
          Tech Tips
        </h2>
        <p>
          Meu blog onde compartilho um pouco dos conhecimentos que adquiri ao longo da minha
          carreira através de artigos, tutoriais e dicas de tecnologia e programação em geral.
          Aqui você vai encontrar muito sobre algorítmo e lógica, linguagens de programação,
          desenvolvimento web, sistemas Linux e o mundo Open Source, e muito mais.
        </p>
      </div>
      <div className="container">
        <div className="columns is-multiline">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
        ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection;