import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'Code',
    imageUrl: 'https://i.ibb.co/KmnM49T/0-k-BHp-Kva09-As-Gj7-RQ.jpg',
    route: 'shop/code',
  },
  {
    id: 2,
    title: 'Resume',
    imageUrl: 'https://i.ibb.co/Bg45Xcn/i-Stock-000033354382-Medium-56b096ac5f9b58b7d0243afd.jpg',
    route: 'shop/resume',
  },
  {
    id: 3,
    title: 'Career',
    imageUrl: 'https://i.ibb.co/hyyLtLb/career-counseling-56a0f2ae5f9b58eba4b575ac.jpg',
    route: 'shop/career',
  },
  {
    id: 4,
    title: 'Coding Interview',
    imageUrl: 'https://i.ibb.co/cLkYPQ4/1-j-Iv-JUz9yl2hze3-DRani-Xsw.jpg',
    route: 'shop/coding interview',
  },
  {
    id: 5,
    title: 'Behavorial Interview',
    imageUrl: 'https://i.ibb.co/dWQJ9kz/85.jpg',
    route: 'shop/behavorial interview',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;