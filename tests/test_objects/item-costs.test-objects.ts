export class itemCostTestObjects{
    public inputOne: string[] = [
        '1 Book at 12.49',
        '1 Book at 12.49',
        '1 Music CD at 14.99',
        '1 Chocolate bar at 0.85',
    ];

    public inputOneSol: string = 
        'Book: 24.98 (2 @ 12.49)\n'
        + 'Music CD: 16.49\n'
        + 'Chocolate bar: 0.85\n'
        + 'Sales Taxes: 1.50\n'
        + 'Total: 42.32';

    public inputTwo: string[] = [
        '1 Imported box of chocolates at 10.00',
        '1 Imported bottle of perfume at 47.50'
    ];

    public inputTwoSol: string = 
        'Imported box of chocolates: 10.50\n'
        + 'Imported bottle of perfume: 54.65\n'
        + 'Sales Taxes: 7.65\n'
        + 'Total: 65.15';

    public inputThree: string[] = [
        '1 Imported bottle of perfume at 27.99',
        '1 Bottle of perfume at 18.99',
        '1 Packet of headache pills at 9.75',
        '1 Imported box of chocolates at 11.25',
        '1 Imported box of chocolates at 11.25'
    ];

    public inputThreeSol: string = 
        'Imported bottle of perfume: 32.19\n'
        + 'Bottle of perfume: 20.89\n'
        + 'Packet of headache pills: 9.75\n'
        + 'Imported box of chocolates: 23.70 (2 @ 11.85)\n'
        + 'Sales Taxes: 7.30\n'
        + 'Total: 86.53';


    public allValidButOne: string[] = [
        '1 Imported bottle of perfume at 27.99',
        '1 Bottle of perfume at 18.99',
        '1 Packet of headache pills at 9.75',
        '1 Imported box of chocolates at 11.25',
        '1 Imported box of chocolates at 11.25',
        '1 bike at'
    ];

    public allValidButOneSol: string = 
        'Imported bottle of perfume: 32.19\n'
        + 'Bottle of perfume: 20.89\n'
        + 'Packet of headache pills: 9.75\n'
        + 'Imported box of chocolates: 23.70 (2 @ 11.85)\n'
        + 'Sales Taxes: 7.30\n'
        + 'Total: 86.53';


    public onlyInvalid: string[] = [
        '1 bike at',
        '1 cart at'
    ];

    public blank: string[] = [];
        
    public onlyInvalidImported: string[] = [
        '1 imported at 10'
    ];

    public invalidSol: string = '';
    
}