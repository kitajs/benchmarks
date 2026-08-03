<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.20.2`
* __Run:__ Mon Aug 03 2026 02:32:37 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 84516.8    | 11.33        | 15.07         |
| connect                  | 3.7.0    | ✗      | 81904.0    | 11.71        | 14.61         |
| fastify                  | 4.29.1   | ✓      | 81400.0    | 11.79        | 14.59         |
| polka                    | 0.5.2    | ✓      | 81334.4    | 11.80        | 14.50         |
| server-base-router       | 7.1.32   | ✓      | 79961.6    | 12.01        | 14.26         |
| kita                     | 1.1.36   | ✓      | 79569.6    | 12.08        | 14.27         |
| rayo                     | 1.4.6    | ✓      | 77648.0    | 12.38        | 13.85         |
| server-base              | 7.1.32   | ✗      | 77475.2    | 12.42        | 13.82         |
| connect-router           | 1.3.8    | ✓      | 75265.6    | 12.79        | 13.42         |
| 0http                    | 3.5.3    | ✓      | 70452.8    | 13.70        | 12.56         |
| polkadot                 | 1.0.0    | ✗      | 67590.0    | 14.29        | 12.05         |
| koa                      | 2.16.4   | ✗      | 64373.2    | 15.03        | 11.48         |
| restana                  | 4.9.9    | ✓      | 63924.0    | 15.16        | 11.40         |
| hono                     | 4.12.33  | ✓      | 62807.2    | 15.43        | 10.30         |
| h3                       | 1.15.11  | ✗      | 62412.0    | 15.53        | 11.13         |
| take-five                | 2.0.0    | ✓      | 61288.8    | 15.81        | 22.04         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 60421.6    | 16.05        | 10.78         |
| h3-router                | 1.15.11  | ✓      | 59667.2    | 16.26        | 10.64         |
| koa-router               | 12.0.1   | ✓      | 57802.4    | 16.80        | 10.31         |
| restify                  | 11.1.0   | ✓      | 57134.4    | 17.00        | 10.30         |
| hapi                     | 21.4.10  | ✓      | 51630.4    | 18.86        | 9.21          |
| express                  | 4.22.2   | ✓      | 18067.2    | 54.83        | 3.22          |
| express-with-middlewares | 4.22.2   | ✓      | 16258.9    | 60.97        | 6.05          |
| fastify-big-json         | 4.29.1   | ✓      | 13523.6    | 73.39        | 155.59        |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
