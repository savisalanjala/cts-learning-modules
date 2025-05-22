SELECT 
    user_id,
    event_id,
    COUNT(*) AS duplicate_count
FROM 
    Registrations
GROUP BY 
    user_id, event_id
HAVING 
    COUNT(*) > 1;
