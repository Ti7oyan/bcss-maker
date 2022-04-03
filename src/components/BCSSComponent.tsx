import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import { Table, Button, Dialog, TextInput, Box } from '@mantine/core';
import { FaCheck, FaCoffee, FaFileDownload, FaFilePdf } from 'react-icons/fa';
import toast from 'react-hot-toast';

import BCSS from '../models/bcss';
import Item from '../models/item';

function checkGroup(item: Item, group: string) {
  if (item.account.group === group) {
    return item.total;
  }

  return '-';
}

function checkBalance(item: Item, balance: string) {
  if (item.account.balance === balance) {
    return item.total;
  }

  return '-';
}

function checkScreen() {
  return screen.width >= 1024;
}

type BCSSType = {
  BCSS: BCSS;
};

const BCSSComponent = ({ BCSS }: BCSSType) => {
  const printRef = useRef(null);
  const [opened, setOpened] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [pdfName, setPdfName] = useState('');
  const l = BCSS.items.length > 15 ? true : false;

  const downloadPDF = async () => {
    setDownloading(true);
    const element = printRef.current;
    const canvas = await html2canvas(element!);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF(l ? 'portrait' : 'landscape', undefined, 'legal');
    const imageProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imageProperties.height * pdfWidth) / imageProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${pdfName}.pdf`);
    setDownloading(false);
    setOpened(false);
  };

  const nameAndDownloadPDF = async () => {
    if (!checkScreen()) {
      toast.error(
        'Debido a limitaciones técnicas, no es posible exportar el balance desde un dispositivo móvil.'
      );
    } else {
      setOpened(true);
    }
  };

  const rows = BCSS.items.map((item) => (
    <tr key={item.id}>
      <td>{item.account.name}</td>
      <td>{item.debts}</td>
      <td>{item.credits}</td>
      <td>{checkBalance(item, 'deudor')}</td>
      <td>{checkBalance(item, 'acreedor')}</td>
      <td>{checkGroup(item, 'activo')}</td>
      <td>
        {checkGroup(item, 'pasivo') && checkGroup(item, 'patrimonio neto')}
      </td>
      <td>{checkGroup(item, 'pérdida')}</td>
      <td>{checkGroup(item, 'ganancia')}</td>
    </tr>
  ));

  return (
    <>
      <Dialog
        opened={opened}
        className="flex flex-col"
        withCloseButton
        onClose={() => setOpened(false)}
        size="lg"
        radius="md"
        transition="slide-left"
        transitionDuration={200}
        transitionTimingFunction="ease"
      >
        <p>¿Cómo quieres nombrar este archivo?</p>
        <TextInput
          className="my-4"
          placeholder="Ej.: BCSS_22-4-2022"
          value={pdfName}
          onChange={(event) => setPdfName(event.target.value)}
        />
        <Button
          variant="outline"
          leftIcon={downloading ? <FaCheck /> : <FaFileDownload />}
          onClick={() => downloadPDF()}
        >
          Descargar
        </Button>
      </Dialog>

      <Box className="overflox-x-auto overflow-x-scroll" ref={printRef}>
        <Table
          className="border-2 border-gray-700"
          fontSize={l ? 'xl' : 'md'}
          striped
        >
          <thead className="border-1 border-gray-900">
            <tr className="table-columns">
              <th>Cuenta</th>
              <th>Sumas D.</th>
              <th>Sumas H.</th>
              <th>Saldo D.</th>
              <th>Saldo H.</th>
              <th>Activo</th>
              <th>P + PN</th>
              <th>Pérdida</th>
              <th>Ganancia</th>
            </tr>
          </thead>
          <tbody className="p-2">
            {rows}
            <Subtotal BCSS={BCSS} />
            <Results BCSS={BCSS} />
            <Total BCSS={BCSS} />
          </tbody>
        </Table>
      </Box>

      <section>
        <h3 className="section-title" style={{width: '60%'}}>
          ¡Gracias por usar la herramienta!
        </h3>
        <span className='flex flex-col lg:flex-row w-max m-auto items-center'>
          <Button
            onClick={() => nameAndDownloadPDF()}
            variant="outline"
            color={checkScreen() ? 'blue' : 'red'}
            className="w-max m-auto"
          >
            Descargar como PDF
            <FaFilePdf className="ml-2 text-red-600 text-xl" />
          </Button>
          <Button
            variant='outline'
            color='dark'
            className='w-max m-auto mt-2 lg:ml-2 lg:mt-0'
            component="a"
            href="https://cafecito.app/ticianomorvan"
            rel="noopener noreferrer"
            target="_blank"
            leftIcon={<FaCoffee className='ml-1 text-xl' />}
          >
            Invitame un cafecito
          </Button>
        </span>
      </section>
    </>
  );
};

const Subtotal = ({ BCSS }: BCSSType) => (
  <tr className="table-columns">
    <td>SUBTOTAL</td>
    <td>{BCSS.totals.sums.debts}</td>
    <td>{BCSS.totals.sums.credits}</td>
    <td>{BCSS.totals.activo + BCSS.totals.perdida}</td>
    <td>
      {BCSS.totals.pasivo + BCSS.totals.patrimonioNeto + BCSS.totals.ganancia}
    </td>
    <td>{BCSS.totals.activo}</td>
    <td>{BCSS.totals.pasivo + BCSS.totals.patrimonioNeto}</td>
    <td>{BCSS.totals.perdida}</td>
    <td>{BCSS.totals.ganancia}</td>
  </tr>
);

const Results = ({ BCSS }: BCSSType) => {
  const result = BCSS.totals.ganancia > BCSS.totals.perdida;

  return (
    <tr className="table-columns">
      <td>RESULTADOS</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>{result ? '-' : BCSS.result}</td>
      <td>{result ? BCSS.result : '-'}</td>
      <td>{result ? BCSS.result : '-'}</td>
      <td>{result ? '-' : BCSS.result}</td>
    </tr>
  );
};

const Total = ({ BCSS }: BCSSType) => {
  const result = BCSS.totals.ganancia > BCSS.totals.perdida;

  return (
    <tr className='table-columns'>
      <td>TOTAL</td>
      <td>{BCSS.totals.sums.debts}</td>
      <td>{BCSS.totals.sums.credits}</td>
      <td>{BCSS.totals.activo + BCSS.totals.perdida}</td>
      <td>
        {BCSS.totals.pasivo + BCSS.totals.patrimonioNeto + BCSS.totals.ganancia}
      </td>
      <td>{result
        ? BCSS.totals.activo
        : BCSS.totals.activo + BCSS.result}
      </td>
      <td>{result
        ? BCSS.totals.pasivo + BCSS.totals.patrimonioNeto + BCSS.result
        : BCSS.totals.pasivo + BCSS.totals.patrimonioNeto}
      </td>
      <td>
        {result ? BCSS.totals.perdida + BCSS.result : BCSS.totals.perdida}
      </td>
      <td>
        {result ? BCSS.totals.ganancia : BCSS.totals.ganancia + BCSS.result}
      </td>
    </tr>
  );
};

export default BCSSComponent;
