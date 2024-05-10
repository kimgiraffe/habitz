'use client';

import StoreCategory from '@/components/store/StoreCategory';
import Image from 'next/image';
import Link from 'next/link';
import { css } from 'styled-system/css';
import { Stack } from 'styled-system/jsx';

const Category = () => {
  const categories: {
    type: 'toy' | 'book' | 'stationery' | 'convenienceStore' | 'iceCream';
    name: string;
  }[] = [
    { type: 'toy', name: '장난감/인형' },
    { type: 'book', name: '도서/동화책' },
    { type: 'stationery', name: '문구류' },
    { type: 'convenienceStore', name: '편의점' },
    { type: 'iceCream', name: '음료/아이스크림' },
  ];
  return (
    <>
      <header
        className={css({
          display: 'flex',
          position: 'sticky',
          height: '2.5rem',
          top: 0,
          bg: 'background.normal.normal/80',
          backdropFilter: 'auto',
          backdropBlur: 'sm',
          px: '1rem',
          justifyContent: 'space-between',
          alignItems: 'end',
        })}
      >
        <Link
          className={css({
            fontFamily: 'yeoljeong',
            fontSize: '28px',
            lineHeight: '38.02px',
            color: 'label.alternative',
          })}
          href={'/home'}
        >
          habitz
        </Link>
        <span
          className={css({
            display: 'flex',
            textStyle: 'headline1.bold',
            gap: '0.125rem',
            py: '0.25rem',
          })}
        >
          8430 <Image src="/coin.svg" alt="coin" width={18} height={18} />
        </span>
      </header>
      <div
        className={css({
          display: 'flex',
          w: 'full',
          flexDir: 'column',
          gap: '1rem',
          p: '1rem',
        })}
      >
        <Stack
          h={'100%'}
          justify={'space-between'}
          display="flex"
          flexDir="column"
          gap="1.25rem"
        >
          {categories.map((category, id) => (
            <Link
              key={id}
              href={{
                pathname: '/store/category',
                query: { category: category.name },
              }}
            >
              <StoreCategory
                type={category.type}
                name={category.name}
              ></StoreCategory>
            </Link>
          ))}
        </Stack>
      </div>
    </>
  );
};
export default Category;
