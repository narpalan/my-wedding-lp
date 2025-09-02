import Image from 'next/image';
import Wrapper from '../wrapper';

const About = (): React.JSX.Element => {
    return (
    <Wrapper>
        <div className='flex flex-col h-[1715px] gap-y-20 lg:gap-x-20 lg:flex-row md:max-lg:items-center lg:justify-center my-5 mx-5 py-5 lg:my-16 lg:mx-20 lg:h-[35rem]'>              
            <Image
                src='https://res.cloudinary.com/dnww83mmv/image/upload/v1728875048/foto-casal-2-festa-junina_j2uykc.webp'
                width={348}
                height={560}
                alt='Our full body photo wearing a Festa Junina costume. Shes dressed like a bride with a white dress and me with a plaid shirt, a patched blue jeans and a straw hat.'                
                loading='lazy'
                className='h-[560px]'
            />
            <div className='flex flex-col md:w-[35rem] lg:w-[41rem] lg:h-[80vh]'>
                <span className='text-justify'>
                    <p className='indent-8'>Nos conhecemos no dia 18 de Abril de 2020 pela internet, como os jovens fazem hoje em dia e desde o primeiro segundo foi realmente um SUPER MATCH! Conversamos por horas a fio e cada descoberta sobre o outro apenas aumentava a sensação de que nos conhecíamos há muitas e muitas vidas! </p>
                    <p className='indent-8'>Nos dias que se seguiram, continuamos a nos conhecer mais e mais! Passamos incontáveis horas proseando em chamadas (pela internet :D) e jogando juntos, até que no dia 28 de Abril nos encontramos pessoalmente pela primeira vez! Ela queria comprar um chá de hibisco no Carrefour, e muito esperto que sou, me ofereci para levá-la até o supermercado para que ela pudesse tomar seu chazinho. Ai vocês sabem o que aconteceu né…? Isso mesmo! Depois que nos encontramos fomos tomar um chá de cevadis juntinhos e acabamos nos esquecendo completamente do supermercado!</p> 
                    <p className='indent-8'>Três dias se passaram, e logo começamos a namorar. Foi rápido né? Afinal, não é todo dia que se acha o Duo da sua vida, não é mesmo?  A cada dia juntos era mais difícil o tchau, e as conversas pela internet não eram mais suficientes! Quando notamos já estávamos cozinhando, sonhando, e trabalhando em uma miríade de projetos. Foi aí que vimos que já estávamos casados em alma e corpo. </p>
                    <p className='indent-8'>Aiii como é bom a vida de Casada ao seu lado!</p>
                    <p className='indent-8'>Quatro anos se passaram e com eles muitas horas de games, inúmeras receitas feitas e aprimoradas, alquimias para velas, projetos de móveis para casa, muitas e muitas ideias de programação e design, foram tantas coisas juntos que não me surpreende nossa ligação instantânea. Coisa de outras vidas!</p>
                    <p className='indent-8'>E para o nosso mais recente projeto, contamos com a SUA PRESENÇA!</p>
                </span>
            </div>            
        </div>
    </Wrapper>
)}

export default About;