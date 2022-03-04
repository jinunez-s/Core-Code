export class Main{
    async start(){
        const menu = new Menu();
        await menu.showMainMenu();
    }
}