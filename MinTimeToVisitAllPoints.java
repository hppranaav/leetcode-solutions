public static int minTimeToVisitAllPoints(int[][] points) {
    int time = 0;
    boolean hasReached = false;
    int xdiff = 0, ydiff = 0;
    for(int i = 0; i < points.length-1; i++) {
        hasReached = false;
        while(hasReached == false) {
            xdiff = points[i][0] - points[i+1][0];
            ydiff = points[i][1] - points[i+1][1];
            System.out.println("moving point is: " + xdiff);
            System.out.println("stationary point is: " + ydiff);
            System.out.println("\n");
            if(xdiff > 0 && ydiff > 0) {
                points[i][0]--;
                points[i][1]--;
                time++;
            }
            else if(xdiff < 0 && ydiff > 0) {
                points[i][0]++;
                points[i][1]--;
                time++;

            }
            else if (xdiff > 0 && ydiff < 0) {
                points[i][0]--;
                points[i][1]++;
                time++;
            }
            else if (xdiff < 0 && ydiff < 0) {
                points[i][0]++;
                points[i][1]++;
                time++;
            }
            else if(xdiff == 0 & ydiff > 0) {
                points[i][1]--;
                time++;
            }
            else if (xdiff == 0 && ydiff < 0) {
                points[i][1]++;
                time++;
            }
            else if(xdiff > 0 && ydiff == 0) {
                points[i][0]--;
                time++;
            }
            else if(xdiff < 0 && ydiff == 0) {
                points[i][0]++;
                time++;
            }
            else if (xdiff == 0 && ydiff == 0) {
                hasReached = true;
            }
        }
    }
    return time;
}