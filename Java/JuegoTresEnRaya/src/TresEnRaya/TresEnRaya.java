package TresEnRaya;

import java.util.Scanner;

public class TresEnRaya {

    static Scanner teclado = new Scanner(System.in);
    static char tresraya[][] = new char[3][3];
    
    public static void main(String[] args) {
        llenar(tresraya);
        mostrar(tresraya);
        users();
        
    }
    public static void llenar(char[][] a){
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                
                a[j][i] = '_';
                
            }
        }  
    }
    public static void mostrar(char[][] a){
        System.out.println("  1 2 3");
        for (int i = 0; i < 3; i++) {
            System.out.print((i+1) + " ");
            for (int j = 0; j < 3; j++) {
                
                System.out.print(a[j][i] + " ");
            }
            System.out.println("");
        }      
    }
    
    public static void users(){
        int cor1, cor2;
        boolean ayud;
        for (int i = 0; i < 9 && (comprobar(tresraya)==false); i++) {
          
            if(i%2==0){
                System.out.println("Introduce las coordenadas de 'X':");
                cor1 = teclado.nextInt() - 1;
                cor2 = teclado.nextInt() - 1;
                ayud = true;
                elegir(ayud, tresraya, cor1, cor2);
                
            }else{
                System.out.println("Introduce las coordenadas de 'O':");
                cor1 = teclado.nextInt() - 1;
                cor2 = teclado.nextInt() - 1;
                ayud = false;
                elegir(ayud, tresraya, cor1, cor2);
            } 
            mostrar(tresraya);
            if(comprobar(tresraya) == true){
                System.out.println("-- HAS GANADO --");
            }
            
        }    
    }
    public static void elegir(boolean ayud,char[][] array, int a, int b){
        if(ayud == true)
        array[a][b] = 'X';
        else
        array[a][b] = 'O';
    }
    public static boolean comprobar(char[][] a){
        boolean x = false;
        if( (a[0][0]=='X' && a[0][1]=='X' && a[0][2]=='X') ||
            (a[1][0]=='X' && a[1][1]=='X' && a[1][2]=='X') ||
            (a[2][0]=='X' && a[2][1]=='X' && a[2][2]=='X') ||    
            (a[0][0]=='X' && a[1][0]=='X' && a[2][0]=='X') ||
            (a[0][1]=='X' && a[1][1]=='X' && a[2][1]=='X') ||
            (a[0][2]=='X' && a[1][2]=='X' && a[2][2]=='X') ||
            (a[0][0]=='X' && a[1][1]=='X' && a[2][2]=='X') ||
            (a[2][0]=='X' && a[1][1]=='X' && a[0][2]=='X') ||   
            (a[0][0]=='O' && a[0][1]=='O' && a[0][2]=='O') ||
            (a[1][0]=='O' && a[1][1]=='O' && a[1][2]=='O') ||
            (a[2][0]=='O' && a[2][1]=='O' && a[2][2]=='O') ||    
            (a[0][0]=='O' && a[1][0]=='O' && a[2][0]=='O') ||
            (a[0][1]=='O' && a[1][1]=='O' && a[2][1]=='O') ||
            (a[0][2]=='O' && a[1][2]=='O' && a[2][2]=='O') ||
            (a[0][0]=='O' && a[1][1]=='O' && a[2][2]=='O') ||
            (a[2][0]=='O' && a[1][1]=='O' && a[0][2]=='O')){
            x = true;
        }
    return(x);
    }
    
}
