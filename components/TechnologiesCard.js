import Image from 'next/image';

function TechnologiesCard() {
  const technologies = [
    { name: 'Javascript', iconUrl: '/img/javascript.svg' },
    { name: 'Node.js', iconUrl: '/img/nodejs.svg' },
    { name: 'React', iconUrl: '/img/react.svg' },
    { name: 'MongoDB', iconUrl: '/img/mongodb.svg' },
    { name: 'PHP', iconUrl: '/img/php.svg' },
    { name: 'Laravel', iconUrl: '/img/laravel.svg' },
    { name: 'MySQl', iconUrl: '/img/mysql.svg' },
    { name: 'Nginx', iconUrl: '/img/nginx.svg' },
    { name: 'Git', iconUrl: '/img/git.svg' },
    { name: 'Linux', iconUrl: '/img/debian.svg' },
  ];

  return (
    <div className="card mb-5">
      <div className="card-content">
        <h6 className="title is-6">
          Algumas Tecnologias Que Utilizo
        </h6>
        <div className="columns is-multiline ml-6">
          { technologies.map((technology, key) => {
            return (
              <div key={key} className="column is-one-fifth">
                <div className="mt-3">
                  <Image src={technology.iconUrl} height={48} width={48} />
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