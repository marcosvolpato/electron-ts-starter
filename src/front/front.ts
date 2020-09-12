import { run } from 'tslint/lib/runner';


class FrontBoot {
  public static run() {
    const title = document.getElementById('title');
    const btn = document.getElementById('test');
    btn.addEventListener('click', event => {
      title.setAttribute('class', 'red-title');
    });
  }
}
FrontBoot.run();