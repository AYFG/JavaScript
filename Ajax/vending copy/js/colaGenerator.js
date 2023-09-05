class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector(".cola-list");
  }

  async setup() {
    const response = await this.loadData();
    this.colaFactory(response);
  }

  async loadData() {
    try {
      const response = await fetch("./items.json");

      if (!response.ok) {
        throw new Error("http error : " + response.status);
      }
      return await response.json();
    } catch (error) {
      console.error("itemlist 로딩 중 문제 발생" + error);
    }
  }

  colaFactory(data) {
    const docFrag = new DocumentFragment();
    data.forEach((el) => {
      const item = document.createElement("li");
      // dataset
      const itemTemplate = `
      <button type="button" class="btn-cola" data-item="${el.name}"
      data-cost=${el.cost} data-img${el.img} data-count${el.count}>
      <img src="./img/${el.img}" alt="${el.name}"/>
      <span class="cola-name">${el.name}</span>
      <strong class="cola-cost>${el.cost}</strong>
      </button>
      `;
      item.innerHTML = itemTemplate;
      docFrag.append(item);
    });
    this.itemList.append(docFrag);
  }
}
export default ColaGenerator;
