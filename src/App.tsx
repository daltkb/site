import type { Component } from 'solid-js';
import { SiTwitter, SiGithub, SiLinkedin, SiGmail } from 'solid-icons/si';

const App: Component = () => {
  return (
    <>
      <div class="mt-16 flex flex-col">
        <h1 class="text-4xl font-bold ">Dalton Bennyhoff</h1>
        <h2 class="text-xl">Software Engineer</h2>
      </div>
      <Icons />
      <div class="mt-10">
        <h2 class="text-xl py-2 font-bold">About</h2>
        <p>
          Hi I'm Dalton. I am a software engineer based out of Dallas, TX.
          Before I started writing code; I was a pro-gamer in the Overwatch
          League. In my spare time I enjoy watching hockey and supporting
          Liverpool FC.
        </p>
      </div>
      <Footer />
    </>
  );
};

const Footer: Component = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="border-t-2 mt-4">
      <p class="py-2">&copy; {currentYear} - Dalton Bennyhoff </p>
    </footer>
  );
};

const Icons: Component = () => {
  return (
    <div class="mt-2 flex gap-2">
      <a href="http://twitter.com/daltkb">
        <SiTwitter size={20} color="#d3d3d3" />
      </a>
      <a href="http://github.com/daltkb">
        <SiGithub size={20} color="#d3d3d3" />
      </a>
      <a href="https://linkedin.com/in/daltkb/">
        <SiLinkedin size={20} color="#d3d3d3" />
      </a>
      <a href="mailto:contact@daltkb.com">
        <SiGmail size={20} color="#d3d3d3" />
      </a>
    </div>
  );
};

export default App;
