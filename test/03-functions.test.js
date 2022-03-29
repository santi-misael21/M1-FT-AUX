const {
    timeConversion
} = require('../03-Functions/03-Functions')


describe('timeConversion(time)', function() {
    it('Deberia retornar la hora en formato 24hs', function() {
      expect(timeConversion("03:15:00PM")).toBe("15:15:00");
      expect(timeConversion("01:12:31AM")).toBe("01:12:31")
    });
    it('deberia retornar la hora correcta para las 12', function() {
        expect(timeConversion("12:15:00PM")).toBe("12:15:00");
        expect(timeConversion("12:12:31AM")).toBe("00:12:31")
      });
      it('EXTRA CREDIT: manejar entrada dedatos erronea', function() {
        expect(timeConversion("35:15:00PM")).toBe(false); //  si     0 y 1 <0 || >23 false
        expect(timeConversion("12:78:31AM")).toBe(false); //  si (:) 6 y 4 <0 || >59 false
        expect(timeConversion("12:15:78AM")).toBe(false); //  si (:) 6 y 7 <0 || >59 false
        expect(timeConversion("")).toBe(false); //            si   length >=0 && <10 false
        expect(timeConversion("15:15AM")).toBe(false)             // // //
      });  
});


