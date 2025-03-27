'use client';
import Image from 'next/image';
import { useCopyToClipboard } from '@/hooks/useCopyToCliboard';

const chavePix = '';
const amazonListLink = 'https://www.amazon.com.br/hz/wishlist/ls/3Q8YYWX6OV1C1?ref_=wl_share';

export default function GiftCard ({ 
    src, 
    title, 
    description, 
    key,
    price, }: {
        src: string, 
        title: string, 
        description: string, 
        key: number,
        price: string, 
    }): React.JSX.Element {
    const { isCopied, copyToClipboard } = useCopyToClipboard();    
    return (
    
    <div className='rounded-lg w-80 lg:w-80 flex flex-col justify-around items-center px-12 py-5 lg:px-12 h-[478px] my-9 transform shadow-2xl pt-5 transition duration-300 hover:scale-105' key={key}>
        <a href={amazonListLink}>        
            <Image
                className='rounded'
                src={src}
                width={240}
                height={210}
                alt="Imagem vela aromática."
                aria-label="Imagem vela aromática."
                loading="lazy"                
            />
        <div className='flex flex-col gap-y-5 items-center'>
            <span className='text-base text-center py-2'>{title}</span>
            <span className='text-sm text-justify'>{description}</span> 
            <span className='text-sm text-justify'>Valor sugerido: R$ {price}</span>
        </div>        
        </a>
        <button onClick={ () => copyToClipboard(chavePix) } className='text-center rounded-3xl bg-mossGreen w-[12.31rem] h-[2.06rem] lg:w-[14.31rem] lg:h-[2.75rem]'>
            {isCopied? 'Chave pix copiada!' : 'Copiar chave pix'}
        </button>                          
    </div>    
    );
}

