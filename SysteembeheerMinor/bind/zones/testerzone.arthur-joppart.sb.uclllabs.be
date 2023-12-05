$TTL	300
@	IN	SOA	arthur-joppart.sb.uclllabs.be testerzone.arthur-joppart.sb.uclllabs.be.(
			6971	; Serial
			300	; Refresh
			300	; Retry
			300	; Expire
			300)	; Negative Cashe TTL

;Name Servers
testerzone.arthur-joppart.sb.uclllabs.be.	IN	NS	ns.arthur-joppart.sb.uclllabs.be.
; A records for name servers
ns	IN	A	193.191.177.133
testsub     IN      A       193.191.177.133
testsub     IN      A       193.191.177.133
testsub     IN      A       193.191.177.133
wwwfoemp     IN      CNAME       www
wwwtest     IN      CNAME       testsub
testsub2     IN      A       193.191.177.133
