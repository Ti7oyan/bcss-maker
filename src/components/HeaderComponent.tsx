import { Box } from '@mantine/core';

const HeaderComponent = () => {
  return (
    <Box className='flex flex-col text-center p-4'>
      <h2 className='text-gray-700'>GENERADOR DE</h2>
      <h1 className='font-semibold text-3xl mt-3'>BALANCE DE COMPROBACIÓN DE SUMAS Y SALDOS</h1>
      <h3>
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