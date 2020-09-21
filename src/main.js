import '@webcomponents/custom-elements';
import './main.css';
import { utiliyCreateImg } from './utility';

// EmptyMealCard
customElements.define(
  'empty-meal-card',
  class extends HTMLElement {
    meal = this.getAttribute('meal');

    constructor() {
      super();
      const templateNode = document.querySelector('#empty-meal-card-template');
      const template = document.importNode(templateNode.content, true);
      this.appendChild(template);
    }

    connectedCallback() {
      const label = this.querySelector('.empty-meal-card__label');
      const title = this.querySelector('.empty-meal-card__title');
      const addMealBtn = this.querySelector('.empty-meal-card__add-meal-btn');
      label.innerHTML = this.meal;
      title.innerHTML = `No ${this.meal} has been <br> planned for today`;
      addMealBtn.innerHTML = `<i class="fas fa-plus"></i> Add ${this.meal}`;
    }
  }
);

// MealCard
customElements.define(
  'meal-card',
  class extends HTMLElement {
    meal = this.getAttribute('meal');
    imgUrl = this.getAttribute('img-url');
    title = this.getAttribute('title');
    description = this.getAttribute('description');

    constructor() {
      super();
      const templateNode = document.querySelector('#meal-card-template');
      const template = document.importNode(templateNode.content, true);
      this.appendChild(template);
    }

    connectedCallback() {
      this.setContent();
      this.setImage();
    }

    setContent() {
      const labelElement = this.querySelector('.meal-card__label');
      const titleElement = this.querySelector('.meal-card__title');
      const descriptionElement = this.querySelector('.meal-card__description');
      labelElement.innerHTML = this.meal;
      titleElement.innerHTML = this.title;
      descriptionElement.innerHTML = this.description;
    }

    setImage() {
      if (!this.imgUrl) {return;}

      const content = this.querySelector('.meal-card__content');
      const imageSet = utiliyCreateImg(this.imgUrl);
      imageSet.classList.add('meal-card__img');
      content.prepend(imageSet);
    }
  }
);

// DayPLan
customElements.define(
  'day-plan',
  class extends HTMLElement {
    day = this.getAttribute('day');

    constructor() {
      super();
      const templateNode = document.querySelector('#day-plan-template');
      const template = document.importNode(templateNode.content, true);
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template);
    }

    connectedCallback() {
      const dayTitle = this.shadowRoot.querySelector('.day-title');
      dayTitle.innerHTML = this.day;
    }
  }
);

// EmptyPLan
customElements.define(
  'empty-plan',
  class extends HTMLElement {
    plan = this.getAttribute('plan');

    constructor() {
      super();
      const templateNode = document.querySelector('#empty-plan-template');
      const template = document.importNode(templateNode.content, true);
      this.appendChild(template);
    }

    connectedCallback() {      
      const title = this.querySelector('.empty-plan__title');
      const addPlanBtn = this.querySelector('.empty-plan__add-plan-btn');      
      title.innerHTML = `No ${this.plan} have been planned for this week`;
      addPlanBtn.innerHTML = `<i class="fas fa-plus"></i> Add ${this.plan} to your plan`;
    }
  }
);