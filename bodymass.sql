DROP TABLE IF EXISTS `medidas`;
CREATE TABLE `medidas` (
  `Id` int(11) NOT NULL,
  `Persona` int(11) NOT NULL,
  `Altura` decimal(3,2) NOT NULL,
  `Peso` decimal(3,2) NOT NULL,
  `BMI` decimal(2,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Medidas del usuario';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `Id` int(11) NOT NULL,
  `User` varchar(100) NOT NULL,
  `Password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tabla de usuarios';

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `medidas`
--
ALTER TABLE `medidas`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Persona` (`Persona`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `medidas`
--
ALTER TABLE `medidas`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `medidas`
--
ALTER TABLE `medidas`
  ADD CONSTRAINT `medidas_ibfk_1` FOREIGN KEY (`Persona`) REFERENCES `usuarios` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
