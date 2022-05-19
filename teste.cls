@isTest
private class TicketCoreAccountBOTest {
  @testSetup()
  static void testSetup() {
    if(Util.personAccountEnabled()) {
      List<FanScore__c> scores = new List<FanScore__c>();
      
      FanScore__c score1 = new FanScore__c(Logic_Type__c='Equals', Field__c='FavoriteOpponent__pc', Name='Favorite Opponent', Object__c='Account', Weight__c=10, Active__c=true);
      FanScore__c score2 = new FanScore__c(Logic_Type__c='Equals', Field__c='FavoriteFood__pc', Name='Favorite Food', Object__c='Account', Weight__c=10, Active__c=true);
      FanScore__c score3 = new FanScore__c(Logic_Type__c='Between', Field__c='Age__pc', Name='Age', Object__c='Account', Weight__c=40, Active__c=true);
      FanScore__c score4 = new FanScore__c(Logic_Type__c='Between', Field__c='DistancetoVenue__pc', Name='Distance', Object__c='Account', Weight__c=40, Active__c=true);
      
      
      scores.add(score1);
      scores.add(score2);
      scores.add(score3);
      scores.add(score4);
      insert scores;
  
      List<FanScoreItem__c> scoreItems = new List<FanScoreItem__c>();
      
      scoreItems.add(new FanScoreItem__c(Score__c='4', EqualValue__c='Opponent 1', FanScore__c=score1.Id)); // 0,4
      scoreItems.add(new FanScoreItem__c(Score__c='5', EqualValue__c='Opponent 2', FanScore__c=score1.Id)); // 0,5
      
      scoreItems.add(new FanScoreItem__c(Score__c='4', EqualValue__c='Hot Dog', FanScore__c=score2.Id)); // 0,4
      scoreItems.add(new FanScoreItem__c(Score__c='5', EqualValue__c='Pizza', FanScore__c=score2.Id)); // 0,5
      
      scoreItems.add(new FanScoreItem__c(Score__c='4', MaximumValue__c='40', FanScore__c=score3.Id)); // 1,6
      scoreItems.add(new FanScoreItem__c(Score__c='5', MinimumValue__c='41', FanScore__c=score3.Id)); // 2
  
      scoreItems.add(new FanScoreItem__c(Score__c='5', MaximumValue__c='10', FanScore__c=score4.Id)); //2
  
      insert scoreItems;
    }
  }

  @isTest
  static void calculateContactScoreWithGroup() {
    if(Util.personAccountEnabled()) {
      Test.startTest();
      Account account1 = new Account();
      account1.put('FirstName', 'Person Account');
      account1.put('LastName', 'Test 1');
      account1.put('FavoriteOpponent__pc', 'Opponent 1');
      account1.put('FavoriteFood__pc', 'Pizza');
      account1.put('PersonBirthdate', System.today().addYears(-35));
      account1.put('DistancetoVenue__pc', 20);

      Account account2 = new Account();
      account2.put('FirstName', 'Person Account');
      account2.put('LastName', 'Test 2');
      account2.put('FavoriteOpponent__pc', 'Opponent 2');
      account2.put('FavoriteFood__pc', 'Hot Dog');
      account2.put('PersonBirthdate', System.today().addYears(-25));
      account2.put('DistancetoVenue__pc', 5);

      Account account3 = new Account();
      account3.put('FirstName', 'Person Account');
      account3.put('LastName', 'Test 3');
      account3.put('FavoriteOpponent__pc', 'Opponent 1');
      account3.put('FavoriteFood__pc', 'Pizza');
      account3.put('PersonBirthdate', System.today().addYears(-50));
      account3.put('DistancetoVenue__pc', 9);

      insert account1;
      insert account2;
      insert account3;
      Test.stopTest();

      account1 = Database.query('SELECT Id, Score__pc FROM Account WHERE LastName = \'Test 1\'');
      account2 = Database.query('SELECT Id, Score__pc FROM Account WHERE LastName = \'Test 2\'');
      account3 = Database.query('SELECT Id, Score__pc FROM Account WHERE LastName = \'Test 3\'');
      
      System.assertEquals(2.5, account1.get('Score__pc'));
      System.assertEquals(4.5, account2.get('Score__pc'));
      System.assertEquals(4.9, account3.get('Score__pc'));
    } else {
      System.assert(true);
    }
  }
}
