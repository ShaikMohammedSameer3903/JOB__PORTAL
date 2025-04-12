package klu.model;

import java.sql.Date;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JWTManager {
	public final String SEC_KEY = "ABCDEFGHIJKLM1234908889NOPQRSTUVWXYZHGGFF";
	  public final SecretKey key = Keys.hmacShaKeyFor(SEC_KEY.getBytes());
	  
	  public String generateToken(String email)
	  {
	    Map<String, String> data = new HashMap<String, String>();
	    data.put("email", email);
	    
	    return Jwts.builder()
	        .setClaims(data)
	        .setIssuedAt(new Date(System.currentTimeMillis()))
	        .setExpiration(new Date(System.currentTimeMillis() + 86400000))
	        .signWith(key)
	        .compact();
	  }
	  
	  public String validateToken(String token)
	  {
	    Claims claims = Jwts.parserBuilder()
	              .setSigningKey(key)
	              .build()
	              .parseClaimsJws(token)
	              .getBody();
	    java.util.Date expiry = claims.getExpiration();
	    if(expiry == null || expiry.before(new java.util.Date()))
	      return "401";
	    return claims.get("email", String.class);
	  }
}
