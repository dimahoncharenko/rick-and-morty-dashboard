import { Pagination, Group, PaginationProps } from '@mantine/core';

import NextButton from "@/components/NextButton";
import PrevButton from "@/components/PrevButton";

import classes from './classes.module.css';

export default function PaginationBar(props: PaginationProps) {
  return (
    <Pagination.Root
      className='mt-12'
      {...props}
      classNames={{
        control: classes.paginationControl,
        dots: classes.paginationDots,
        root: 'mt-6 md:mt-12 lg:mt-[40px]',
      }}
    >
      <Group gap={0} justify='center'>
        <div className={classes.paginationOptions}>
          <Pagination.Previous icon={PrevButton}/>
          <Pagination.Items />
          <Pagination.Next icon={NextButton}/>
        </div>
      </Group>
    </Pagination.Root>
  );
}