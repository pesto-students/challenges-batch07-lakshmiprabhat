function rot13(str) { 
  return (str.toUpperCase().replace(/[A-Z]/g, c => 'NOPQRSTUVWXYZABCDEFGHIJKLM'['ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(c)] ));
 }

export { rot13 };
