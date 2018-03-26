10.times do |d|
FreelanceDocument.create!(
  title: "Document #{d}", 
  description: "The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.", 
  file_url: "https://docs.google.com/document/d/1UUgAob6ZpivgkgCbMD84JMMRc1flrzCPKybtQoAfASo/edit?usp=sharing", 
  image_url: 'https://s3.amazonaws.com/devcamp-static/images/freelance-img.jpg'
  )
end

puts "10 documents created"



