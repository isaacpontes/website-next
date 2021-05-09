import Image from 'next/image';
import { useIntl } from 'react-intl';

export default function TechnologiesCard() {
  const technologies = [
    { name: 'Javascript', iconUrl: '/assets/img/javascript.svg' },
    { name: 'Node.js', iconUrl: '/assets/img/nodejs.svg' },
    { name: 'React', iconUrl: '/assets/img/react.svg' },
    { name: 'Next.js', iconUrl: '/assets/img/nextjs.svg' },
    { name: 'MongoDB', iconUrl: '/assets/img/mongodb.svg' },
    { name: 'Nginx', iconUrl: '/assets/img/nginx.svg' },
    { name: 'PHP', iconUrl: '/assets/img/php.svg' },
    { name: 'Laravel', iconUrl: '/assets/img/laravel.svg' },
    { name: 'WordPress', iconUrl: '/assets/img/wordpress.svg' },
    { name: 'MySQl', iconUrl: '/assets/img/mysql.svg' },
    { name: 'Git', iconUrl: '/assets/img/git.svg' },
    { name: 'Linux', iconUrl: '/assets/img/debian.svg' },
  ];

  const { formatMessage } = useIntl();
  const _f = (id) => formatMessage({ id });

  return (
    <div className="card mb-5">
      <div className="card-content">
        <h6 className="title is-5">
          {_f("technologiesIUseOften")}
        </h6>
        <div className="columns is-mobile is-multiline">
          {technologies.map((technology, key) => {
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