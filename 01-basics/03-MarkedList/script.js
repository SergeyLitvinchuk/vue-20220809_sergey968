import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

// Требуется создать Vue приложение
const App = defineComponent({
  // Имя позволяет программно получать имя компонента.
  // Используется в devtools,
  name: 'App',

  data() {
      return {
          emailFilter:""
      };
  },

  computed: {
      emailsIncludeFilter(){
          const lowerFilter = this.emailFilter.toLowerCase();
          const filterNotEmpty = lowerFilter.length !== 0;

          return emails.map(name => {
            const container = {};

            container.name = name;
            container.includeFilter =  filterNotEmpty && name.toLowerCase().includes(lowerFilter);

            return container;
          });
      }
  }
});

// Создаём новое приложение по корневому компоненту
const app = createApp(App);

const vm = app.mount('#app');

window.vm = vm;