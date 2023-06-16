// const logout = (req, res) => {
//     try {
//       req.session.destroy((err) => {
//         if (err) {
//           console.log('Error al cerrar sesión:', err);
//           res.status(500).send('Error al cerrar sesión');
//         } else {
//           res.send('Sesión cerrada exitosamente'); // Puedes cambiar este mensaje de acuerdo a tus necesidades
//         }
//       });
//     } catch (err) {
//       console.log('Error al cerrar sesión:', err);
//       res.status(500).send('Error al cerrar sesión');
//     }
//   };

//   module.exports  = {logout}; 