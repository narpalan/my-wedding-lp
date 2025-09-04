import BestsList from '@/components/bests/bests-list';
import Hero from '@/components/hero';
import Wrapper from '@/components/wrapper';
import Divider from '@/components/divider/divider';
import CeremonyMap from '@/components/ceremony-map/ceremony-map';
import RSVPForm from '@/components/form/RSVPForm';
import GiftList from '@/components/gift-list/gift-list';
import About from '@/components/about/about';

export default function Home() {
  return (
    <>      
      <Hero/>      
      <Divider id='couple' text="O Casal"/>  
      <About/>
      <Wrapper className='bg-violet-200 mt-[80px] lg:mt-7'>
        <div className='flex flex-col gap-y-5 lg:flex-row lg:justify-around items-center text-black p-5'>
          <span>Confirme sua presença até 04/11/2024</span>
          <a href='#rsvp'>
            <button className="text-center rounded-3xl bg-mossGreen w-[12.31rem] h-[2.06rem] lg:w-[16.31rem] lg:h-[2.75rem]" type='submit'>
              <p>Confirmar Presença</p>
            </button>
          </a>
        </div>
      </Wrapper>
      <Divider id='bests' text='Os Padrinhos'/>
      <Wrapper>        
        <BestsList/>
      </Wrapper>
      <Divider id='location' text="Cerimônia e Recepção"/>  
      <Wrapper>
        <CeremonyMap/>        
      </Wrapper>
      <Divider id='gifts' text='Lista de Presentes'/>      
      <Wrapper>
        <GiftList/>
      </Wrapper>
      <Divider id="rsvp" text='Confirmar Presença'/>      
      <Wrapper>        
        <RSVPForm/>
      </Wrapper>
                
    </>
  );
}
