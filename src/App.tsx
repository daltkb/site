import type { Component } from 'solid-js';
import { SiTwitter, SiGithub, SiLinkedin, SiGmail } from 'solid-icons/si';
import Project from './components/Project';

const App: Component = () => {
  return (
    <>
      <div class="mt-16 flex flex-col">
        <h1 class="text-4xl font-bold ">Dalton Bennyhoff</h1>
        <h2 class="text-xl">Software Engineer</h2>
      </div>
      <div class="mt-10">
        <h2 class="text-xl py-2 font-medium">About</h2>
        <p>
          Hi I'm Dalton. I am a software engineer based out of Dallas, TX.
          Before I started writing code; I was a pro-gamer in the Overwatch
          League. In my spare time I enjoy watching hockey and supporting
          Liverpool FC.
        </p>
      </div>
      <div class="mt-10">
        <h2 class="text-xl py-2 font-medium">Contact</h2>
        <p>
          You can reach me on{' '}
          <a href="https://www.twitter.com/daltkb" class="text-[#AE3967]">
            Twitter
          </a>{' '}
          through DMs.
        </p>
        <div class="mt-10">
          <h2 class="text-xl py-2 font-medium">Work</h2>
          <Project
            name={'Project'}
            description={'This is my project I made!'}
            link={'https://google.com'}
            tags={['Next.js', 'Chakra UI']}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

const Footer: Component = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="border-t-2 mt-4 flex justify-between align-middle">
      <p class="py-2">&copy; {currentYear} - Dalton Bennyhoff </p>
      <Icons />
    </footer>
  );
};

const Icons: Component = () => {
  return (
    <div class="mt-2 flex gap-3 pr-2">
      <a href="http://twitter.com/daltkb">
        <SiTwitter size={22} color="#AE3967" title="Twitter" />
      </a>
      <a href="http://github.com/daltkb">
        <SiGithub size={22} color="#AE3967" title="Github" />
      </a>
      <a href="https://linkedin.com/in/daltkb/">
        <SiLinkedin size={22} color="#AE3967" title="LinkedIn" />
      </a>
      <a href="mailto:contact@daltkb.com">
        <SiGmail size={22} color="#AE3967" title="Contact Email" />
      </a>
    </div>
  );
};

export default App;
