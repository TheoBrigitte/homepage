import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemeToggle from "./components/toggle";

export default function Home() {
  return (
    <div className="flex h-screen">
    <div className="max-w-full sm:max-w-5xl m-auto">
    <div className="pl-5 pr-5 sm:pl-20 sm:pr-20 text-center">
      <main>
        <div className="flex flex-row justify-center text-3xl font-extrabold p-5 space-x-1"><div className="w-1/2 text-right">Théo</div><div className="w-1/2 text-left">Brigitte</div></div>
        <div className="">Software Engineer since 12+ years. I apply for <a href="https://go.dev/" className="text-blue-500" target="_blank">Go</a> expert and Bash wizard titles. Working mainly with <a href="https://kubernetes.io/" className="text-blue-500" target="_blank">Kubernetes</a>, Grafana, Prometheus/Mimir and Loki. I am a curious mind and a fast learner who likes to solve complex tasks. I also run my own cryptocurrency trading bot using <a href="https://www.freqtrade.io/" className="text-blue-500" target="_blank">freqtrade</a>. And btw I use Arch.</div>
      </main>
      <div className="skills flex flex-row text-nowrap pt-5 pb-5 sm:p-10 sm:space-x-3 justify-start sm:jusitfy-center m-auto font-mono">
        <ul className="sm:w-1/2 text-left sm:text-right space-y-7 sm:space-y-0 key">
          <li>Profession</li>
          <li>Experience</li>
          <li>Languages</li>
          <li>Cloud provider</li>
          <li>Orchestration System</li>
          <li>Observability</li>
          <li>Pager</li>
          <li>Web server</li>
          <li>Version control</li>
          <li>CI/CD</li>
          <li>OS</li>
          <li>Shell</li>
          <li>Editor</li>
        </ul>
        <ul className="sm:w-1/2 absolute sm:static space-y-7 sm:space-y-0 pt-6 sm:pt-0 text-left value">
          <li>Software Developer</li>
          <li>12 years</li>
          <li>Go, Bash</li>
          <li>AWS, Azure, GCP, Oracle, OVH</li>
          <li>Kubernetes</li>
          <li>Grafana, Prometheus/Mimir, Loki</li>
          <li>OpsGenie</li>
          <li>nginx</li>
          <li>Git</li>
          <li>FluxCD, Github Actions, CircleCI</li>
          <li>Arch Linux</li>
          <li>Zsh + tmux</li>
          <li>Vim</li>
        </ul>
      </div>
      <footer className="p-5 space-x-6">
        <a href="https://github.com/TheoBrigitte/" target="_blank"><FontAwesomeIcon icon={["fab", "github"]} size="2x" /></a>
        <a href="https://www.linkedin.com/in/th%C3%A9o-brigitte-a4326175/" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" /></a>
        <a href="https://theobrigitte.com/cv.pdf" target="_blank"><FontAwesomeIcon icon={["far", "file-pdf"]} size="2x" /></a>
      </footer>
      </div>
      <div className="pr-5 pb-5 sm:pr-20 sm:pb-20 flex flex-row-reverse hover:text-amber-400">
        <ThemeToggle>
          <FontAwesomeIcon icon={["fas", "adjust"]} />
        </ThemeToggle>
      </div>
      </div>
    </div>
  );
}
