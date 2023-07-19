package chap_01;

public class _03_Variables {
    public static void main(String[] args) {
        String name;

        int hour = 15;

        name = "정원석";

        System.out.println(name + "님, 배송이 시작됩니다." + hour + "시에 도착 예정입니다.");
        System.out.println(name + "님, 배송이 완료되었습니다.");

        double score = 90.5;
        
//      따옴표 주의
        char grade = 'A';
        name = "815런";
        System.out.println(name + "님의 평균 점수는 " + score + "점입니다.");
        System.out.println("학점은 " + grade + "입니다.");

        boolean pass = true;
        System.out.println("이번 시험에 합격 했나요?" + pass);
        
//      1:03:34초 까지
    }
}
