public interface Animal {void create();}
public class animal1 implements Animal {
@Override
public void create() {
System.out.println("You've just created a cheetah!");}}
public class animal2 implements Animal {
@Override
public void create() {
System.out.println("You've just created a kangaroo!");}}
public class animal3 implements Animal {
@Override
public void create() {
System.out.println("You've just created a lion!");}}
public class factory {	
public Animal get(String type){
if(type == null){
return null;
}if(type.equalsIgnoreCase("Kangaroo")){
return new animal1();        
}else if(type.equalsIgnoreCase("Cheetah")){
return new animal2();     
}else if(type.equalsIgnoreCase("Lion")){
return new animal3();}   
return null;}}
public class Main {
public static void main(String[] args) {
factory factory = new factory();
Animal animal1 = factory.get("Kangaroo");
animal1.create();
Animal animal2 = factory.get("Cheetah");
animal2.create();
Animal animal3 = factory.get("Lion");
animal3.create();}}