exports.handler = async (event) => {
  const { password } = JSON.parse(event.body);

  if (password === '123') {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, dni: '80101534D' }),
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ success: false, message: 'Contraseña incorrecta' }),
  };
};
