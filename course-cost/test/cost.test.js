    describe("Ensure that courses get different prices across discount windows ", function() {

        it("should return 3405 as price for r1 course on 23 May 2023", function(){
            
            let courseItem = courseCost("r1", "2023-05-21");
    
            let costAmount = courseItem.amountDue;
    
            assert.equal(3405, costAmount)
    
        });
        
        it("should return 6280 as price for p1 course on 13 September 2023", function(){
    
            let courseItem = courseCost("p1", "2023-09-13");
    
            let costAmount = courseItem.amountDue;
    
            assert.equal(6280, costAmount)
        });
        
        it("should return 8990 as price for p2 course on 1 May 2023, showing no discount", function(){
            let courseItem = courseCost("p2", "2023-05-01");
    
            let costAmount = courseItem.amountDue;
    
            assert.equal(8990, costAmount)
        });
    })
    
    describe("Ensure different courses has different prices", function() {
        it("should return 5675 as price for r1 course", function(){
    
            let courseItem = courseCost("r1", "2023-05-01");
        
            let costPrice = courseItem.cost;
        
            assert.equal(5675, costPrice);
        
        });
    
        it("should return 7850 as price for p1 course", function(){
    
            let courseItem = courseCost("p1", "2023-05-01");
        
            let costPrice = courseItem.cost;
        
            assert.equal(7850, costPrice);
        
        });
    
        it("should return 8990 as price for p2 course", function(){
    
            let courseItem = courseCost("p2", "2023-05-01");
        
            let costPrice = courseItem.cost;
        
            assert.equal(8990, costPrice);
        
        });
    })
    
    describe("Ensure that invalid course codes are handled correctly", function() {
        it("should return 'Invalid code' as status when passed c2", function(){
    
            let courseItem = courseCost("c2", "2023-05-01");
        
            let courseStatus = courseItem.status;
        
            assert.equal("Invalid code", courseStatus);
        
        });
        it("should return 'Invalid code' as status when passed s1", function(){
    
            let courseItem = courseCost("s1", "2023-05-01");
        
            let courseStatus = courseItem.status;
        
            assert.equal("Invalid code", courseStatus);
        
        });
        it("should return 'Invalid code' as status when passed f3", function(){
    
            let courseItem = courseCost("f3", "2023-05-01");
        
            let courseStatus = courseItem.status;
        
            assert.equal("Invalid code", courseStatus);
        
        });
    })
    
    describe("Ensure that invalid dates returns a status of: Invalid day", function() {
        it("should return 'Invalid day' as status when passed '31 March 2023'", function(){
            let courseItem = courseCost("p1", "31 March 2023");
        
            let courseStatus = courseItem.status;
        
            assert.equal("Invalid day", courseStatus);
        })
    })



