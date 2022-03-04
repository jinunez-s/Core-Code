import { MenuElement } from "./MenuElement";
import { Choice ,Input,SelectChoice, UserOption }from "./Input";
MenuElement

export class Menu{
    mainMenu: SelectChoice[] = [];

    soupMenu: Choice[] = [];
    chefSpecialsMenu: Choice[] = [];
    chickenMenu: Choice[] = [];
    beefMenu: Choice[] = [];
    beveragesMenu: Choice[] = [];

    soupOptions: MenuElement[] = [];
    chefSpecialsOptions: MenuElement[] = [];
    chickenOptions: MenuElement[] = [];
    beefOptions: MenuElement[] = [];
    beveragesOptions: MenuElement[] = [];


    constructor(){
        this.fillMainMenu();
        this.fillOptions();
        this.fillSubMenus();
    }

    fillMainMenu(){
        this.mainMenu = [
            {option: 1, message: 'Soup'},
            {option: 2, message: `Chef's Specials`},
            {option: 3, message: 'Chiken'},
            {option: 4, message: 'Beef'},
            {option: 5, message: 'Beverages'},
            {option: 6, message: 'Exit'},
        ];
    }

    fillOptions(){
        this.soupOptions = [
            new MenuElement('Wonton Soup (Chiken', 2.25, 'chiken'),
            new MenuElement('Chicken Corn Soup', 1.95, 'Hi'),
            new MenuElement('Vegetable Corn Soup', 2.25, 'Vegetales'),
        ];


        this.chefSpecialsOptions = [
            new MenuElement('Orange Beef', 8.95, 'orange'),
            new MenuElement('Kung Pao Shrimp', 8.5, ' shrimp'),
        ];

        this.chickenOptions = [
            new MenuElement('Lemon Chiken', 9.95, 'limon'),
            new MenuElement('Sesame Chiken', 9.95, 'Expensive'),
            new MenuElement('Hunan Chicken', 10.5, '🐣'),
        ];

        this.beefOptions = [
            new MenuElement('Peper Steak', 9.95, 'Pepper'),
            new MenuElement('Manchurian Beef', 11.95, ' Beef'),
        ];
        
        this.beveragesOptions = [
            new MenuElement('Piña Colada', 3.0, 'Piña'),
            new MenuElement('Spanish Coffee', 5.5, 'Cafeina')
        ]
    }

    fillSubMenus(){
        this.soupMenu = this.soupOptions.map((e: MenuElement) => ({
            name: e.id,
            message: e.printOption(),
        }));

        this.chefSpecialsMenu = this.chefSpecialsOptions.map((e: MenuElement) => ({
            name: e.id,
            message: e.printOption(),
          }));
      
          this.chickenMenu = this.chickenOptions.map((e: MenuElement) => ({
            name: e.id,
            message: e.printOption(),
          }));
      
          this.beefMenu = this.beefOptions.map((e: MenuElement) => ({
            name: e.id,
            message: e.printOption(),
          }));
      
          this.beveragesMenu = this.beveragesOptions.map((e: MenuElement) => ({
            name: e.id,
            message: e.printOption(),
          }));
    }

    async showSubMenuOption(
        message: string,
        subMenu: Choice[],
        subMenuOptions: MenuElement[]
    ){
        const input = await Input.getSelectedById(message, subMenu);
        const option = subMenuOptions.find((e: MenuElement) => input.data === e.id);
        console.log(`\n
        Here is your: ${option?.emoji} at a ${option?.price} cost
        \n`);
        
    }

    async showMainMenu() {
        let option = -1;
        let input: UserOption;
        while (option !==6){
            input = await Input.getSelect('Select a menu option', this.mainMenu);
            option = input.data;
            switch (option){
                case 1:
                    await this.showSubMenuOption(
                        'Select your Soup',
                        this.soupMenu,
                        this.soupOptions
                    );
                    break;
                    case 2:
                        await this.showSubMenuOption(
                          `Select your Chef's Specials`,
                          this.chefSpecialsMenu,
                          this.chefSpecialsOptions
                        );
                        break;
                      case 3:
                        await this.showSubMenuOption(
                          'Select your Chicken',
                          this.chickenMenu,
                          this.chickenOptions
                        );
                        break;
                      case 4:
                        await this.showSubMenuOption(
                          'Select your Beef',
                          this.beefMenu,
                          this.beefOptions
                        );
                        break;
                      case 5:
                        await this.showSubMenuOption(
                          'Select your Beverages',
                          this.beveragesMenu,
                          this.beveragesOptions
                        );
                        break;
                      case 6:
                        console.log(`\n
                        *******************************************************
                        ===========================================
                              Enjoy your meal! 🙋🏻‍♂️
                        ===========================================
                        *******************************************************\n`);
                        break;
            }
        }
    }




}