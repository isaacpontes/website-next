import Image from 'next/image';

function TechnologiesCard() {
  const technologies = [
    { name: 'Javascript', iconUrl: '/img/javascript.svg' },
    { name: 'Node.js', iconUrl: '/img/nodejs.svg' },
    { name: 'React', iconUrl: '/img/react.svg' },
    { name: 'Next.js', iconUrl: '/img/nextjs.svg' },
    { name: 'MongoDB', iconUrl: '/img/mongodb.svg' },
    { name: 'Nginx', iconUrl: '/img/nginx.svg' },
    { name: 'PHP', iconUrl: '/img/php.svg' },
    { name: 'Laravel', iconUrl: '/img/laravel.svg' },
    { name: 'WordPress', iconUrl: '/img/wordpress.svg' },
    { name: 'MySQl', iconUrl: '/img/mysql.svg' },
    { name: 'Git', iconUrl: '/img/git.svg' },
    { name: 'Linux', iconUrl: '/img/debian.svg' },
  ];

  return (
    <div className="card mb-5">
      <div className="card-content">
        <h6 className="title is-5">
          Algumas Tecnologias Que Utilizo
        </h6>
        <div className="columns is-mobile is-multiline">
          { technologies.map((technology, key) => {
            return (
              <div key={key} className="column is-4-mobile is-2-tablet">
                <div className="mt-3">
                  <Image src={technology.iconUrl} height={48} width={48} className="mx-auto" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TechnologiesCard;