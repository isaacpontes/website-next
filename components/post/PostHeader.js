import Avatar from '../blog/Avatar';
import DateFormatter from '../DateFormatter';
import PostTitle from './PostTitle';

export default function PostHeader({ title, date, author }) {
  return (
    <>
      <div className="my-4">
        <PostTitle>{title}</PostTitle>
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="is-italic mb-6">
        <DateFormatter dateString={date} />
      </div>
    </>
  )
}