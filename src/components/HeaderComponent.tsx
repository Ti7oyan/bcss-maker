import { Box } from '@mantine/core';

const HeaderComponent = () => {
  return (
    <Box className='flex flex-col text-center p-4'>
      <h1 className='font-semibold text-3xl m-2'>BALANCE DE COMPROBACIÓN DE SUMAS Y SALDOS</h1>
      <h3 className='text-neutral-700'>
        Desarrollado por
        {' '}
        <a 
          href='https://ticianomorvan.me/link-tree'
          className='underline text-blue-600  hover:text-blue-800'
          rel='noreferrer'
          target='_blank'>
          Ticiano Morvan
        </a>
      </h3>
    </Box>
  );
};

export default HeaderComponent;